import { defineStore } from 'pinia';

import * as api from '@/api';

import { formatDate, formatDateAndTime } from '@/utils/format-date-and-time';
import paginateItems from '@/utils/paginate-items';
import reorderItems from '@/utils/reorder-items';
import searchItems from '@/utils/search-items';

export const useStore = defineStore('store', {
  state: () => ({
    people: [],
    shifts: [],
    activePersonId: undefined,

    itemsPerPage: 10,
    totalPages: 1,
    activePage: 1,

    tableOrder: {},
    searchInput: '',

    // Define the table columns here so they can be in all components without prop drilling
    tableColumns: [
      {
        id: 'name',
        title: 'Name',
        allowReorder: true
      },
      {
        id: 'dateOfBirth',
        title: 'Date of birth',
        allowReorder: true
      },
      {
        id: 'startDate',
        title: 'Start date',
        allowReorder: true
      },
      {
        id: 'status',
        title: 'Status',
        allowReorder: true
      },
      {
        id: 'action',
        title: 'Action'
      }
    ],
  }),

  actions: {
    async fetchPeople() {
      const data = await api.fetchPeople();

      // Map the API data to the structure I need
      this.people = data.map(dataItem => {
        const { active, DateOfBirth, StartDate } = dataItem;

        return {
          ...dataItem,
          status: active ? 'Active' : 'Inactive',
          dateOfBirth: formatDate(DateOfBirth),
          startDate: formatDate(StartDate),
        }
      });

      this.setTotalPages();
    },

    async fetchShifts() {
      const data = await api.fetchShifts();

      // Changed object keys casing just to keep consistant across the frontend
      this.shifts = data.map(dataItem => {
        const { Id, PersonId, Location, Role, Start, End } = dataItem;

        return {
          id: Id,
          personId: PersonId,
          location: Location,
          role: Role,
          start: formatDateAndTime(Start),
          end: formatDateAndTime(End),
        }
      });
    },

    setTotalPages() {
      this.totalPages = Math.ceil(this.people?.length / this.itemsPerPage);
    },

    setActivePage(page) {
      this.activePage = page;
    },

    setTableOrder(columnId, order) {
      this.tableOrder = {
        orderBy: columnId,
        order,
      }
    },

    setSearchInput(value) {
      this.searchInput = value;
    },

    setActivePersonId(id) {
      this.activePersonId = id;
    },
  },

  getters: {
    getPeople: (state) => {
      return () => {
        // Create new array here rather than mutating the original
        let filteredPeople = [...state.people];

        if (state.searchInput) filteredPeople = searchItems(filteredPeople, state.searchInput);
        if (Object.keys(state.tableOrder).length) filteredPeople = reorderItems(filteredPeople, state.tableOrder);

        filteredPeople = paginateItems(filteredPeople, state.activePage, state.itemsPerPage);

        return filteredPeople;
      };
    },

    getActivePersonShifts: (state) => {
      return () => state.shifts.filter(shift => shift.personId === state.activePersonId);
    },

    getActivePersonName: (state) => {
      return () => state.people.find(person => person.id === state.activePersonId)?.name;
    }
  },
});
