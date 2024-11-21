import { useState } from 'react';
import { Disclosure, DisclosureButton, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import BarGraph from './BarGraph';
import Calendar from './Calendar';
import Chart from './Chart';
import ExpenseChart from './ExpenseChart';
import CurrencyConverter from './CurrencyConverter';

export default function ChartComponent() {
  const [availableBudget, setAvailableBudget] = useState(0);

  // User data and navigation items
  const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ];

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ];

  function UserMenu() {
    return (
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="flex items-center rounded-full bg-gray-800 p-2 text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
          </MenuButton>
        </div>
        <MenuItems className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
          {userNavigation.map((item) => (
            <MenuItem key={item.name}>
              <a
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.name}
              </a>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    );
  }

  return (
    <div className="min-h-full bg-gray-50">
      {/* Navigation Bar */}
      <Disclosure as="nav" className="bg-gray-800 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  alt="Logo"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-8"
                />
              </div>
              <div className="hidden md:flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-white hover:text-indigo-400 ${item.current ? 'font-semibold' : 'text-gray-300'}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>
              <UserMenu />
            </div>
            <div className="-mr-2 flex md:hidden">
              <DisclosureButton className="group inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </DisclosureButton>
            </div>
          </div>
        </div>
      </Disclosure>

      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Budget Overview</h1>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
              <span className="text-sm text-gray-500">Total Budget</span>
              <span className="font-semibold text-gray-800">${availableBudget}</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold text-gray-800">$7,500</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
              <span className="text-sm text-gray-500">Remaining Budget</span>
              <span className="font-semibold text-gray-800">${availableBudget}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-6 bg-white dark:bg-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Calendar Component */}
          <div className="col-span-1 bg-white p-4 rounded-lg shadow-md">
            <Calendar />
          </div>

          {/* Expense Chart */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white p-6 rounded-lg shadow-md w-full h-auto">
            <ExpenseChart />
          </div>

          {/* Main Chart */}
          <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
            <Chart />
          </div>

          {/* Bar Graph */}
          <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
            <BarGraph />
          </div>

          {/* Currency Converter */}
          <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
            <CurrencyConverter />
          </div>
        </div>
      </main>
    </div>
  );
}
