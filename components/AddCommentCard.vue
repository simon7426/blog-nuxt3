<template>
  <div>
    <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
    <div class="flex mx-auto items-center justify-center pb-2">
      <div class="w-full bg-white rounded-lg px-2 pt-2">
        <div class="flex flex-wrap -mx-3 mb-6">
          <h2 class="pl-2 pt-3 pb-2 text-gray-800 text-lg">Add a comment</h2>
          <div class="flex items-end w-full md:w-full pl-2 mb-2 mt-2">
            <div class="mb-4 pr-2">
              <input
                id="username"
                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-4">
              <input
                id="hello"
                class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="w-full md:w-full pl-2 mb-2 mt-2">
            <textarea
              class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-28 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Comment"
              required
            ></textarea>
          </div>
          <div class="w-full md:w-full flex items-end md:w-full">
            <!-- <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
              <svg
                fill="none"
                class="w-5 h-5 text-gray-600 mr-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="text-xs md:text-sm pt-px">Some HTML is okay.</p>
            </div> -->
            <div class="ml-auto">
              <button
                class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
