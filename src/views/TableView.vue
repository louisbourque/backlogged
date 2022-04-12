<template>
  <div class="flex flex-col mt-8">
    <div class="overflow-x-auto py-2 -my-2 sm:px-6 sm:-mx-6 lg:px-8 lg:-mx-8">
      <div
        class="inline-block overflow-hidden min-w-full align-middle border-b border-gray-200 shadow sm:rounded-lg"
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200"
              >
                Name
              </th>
              <th
                class="py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200"
              >
                Email
              </th>
              <th
                class="py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200"
              >
                Status
              </th>
              <th
                class="py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200"
              >
                Edit
              </th>
              <th
                class="py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase bg-gray-50 border-b border-gray-200"
              >
                Delete
              </th>
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr>
              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="shrink-0 w-10 h-10">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://source.unsplash.com/user/erondu"
                      alt="admin dashboard ui"
                    />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                      John Doe
                    </div>
                  </div>
                </div>
              </td>

              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-500">
                  john@example.com
                </div>
              </td>

              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <span
                  class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                  >Active</span
                >
              </td>

              <td
                class="py-4 px-6 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-no-wrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </td>
              <td
                class="py-4 px-6 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-no-wrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="shrink-0 w-10 h-10">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://source.unsplash.com/user/erondu"
                      alt="admin dashboard ui"
                    />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                      John Doe
                    </div>
                  </div>
                </div>
              </td>

              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-500">
                  john@example.com
                </div>
              </td>

              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <span
                  class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                  >Active</span
                >
              </td>

              <td
                class="py-4 px-6 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-no-wrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </td>
              <td
                class="py-4 px-6 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-no-wrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="shrink-0 w-10 h-10">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://source.unsplash.com/user/erondu"
                      alt="admin dashboard ui"
                    />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                      John Doe
                    </div>
                  </div>
                </div>
              </td>

              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-500">
                  john@example.com
                </div>
              </td>

              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <span
                  class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                  >Active</span
                >
              </td>

              <td
                class="py-4 px-6 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-no-wrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </td>
              <td
                class="py-4 px-6 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-no-wrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="shrink-0 w-10 h-10">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://source.unsplash.com/user/erondu"
                      alt="admin dashboard ui"
                    />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                      John Doe
                    </div>
                  </div>
                </div>
              </td>

              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-500">
                  john@example.com
                </div>
              </td>

              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <span
                  class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                  >Active</span
                >
              </td>

              <td
                class="py-4 px-6 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-no-wrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </td>
              <td
                class="py-4 px-6 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-no-wrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="shrink-0 w-10 h-10">
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://source.unsplash.com/user/erondu"
                      alt="admin dashboard ui"
                    />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm font-medium leading-5 text-gray-900">
                      John Doe
                    </div>
                  </div>
                </div>
              </td>

              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-500">
                  john@example.com
                </div>
              </td>

              <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
                <span
                  class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                  >Active</span
                >
              </td>

              <td
                class="py-4 px-6 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-no-wrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </td>
              <td
                class="py-4 px-6 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-no-wrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
