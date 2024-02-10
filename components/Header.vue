  <template>
  <!-- ========== HEADER ========== -->
  <header class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64">
   <nav class="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
     <div class="me-5 lg:me-0 lg:hidden">
       <a class="flex-none text-xl font-semibold" href="#" aria-label="Brand">NexusConnect</a>
     </div>
 
     <div class="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
       <div class="sm:hidden">
         <button type="button" class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
           <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
         </button>
       </div>
 
       <div class="hidden sm:block">
       </div>
 
       <div class="flex flex-row items-center justify-end gap-2">
 
         <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
           <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2" aria-labelledby="hs-dropdown-with-header">
             <div class="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg">
               <p class="text-sm text-gray-500">Signed in as</p>
               <p class="text-sm font-medium text-gray-800">james@site.com</p>
             </div>
             <div class="mt-2 py-2 first:pt-0 last:pb-0">
               <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 text-gray-400" href="#">
                 <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                 Newsletter
               </a>
               <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                 <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                 Purchases
               </a>
               <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                 <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
                 Downloads
               </a>
               <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                 <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                 Team Account
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </nav>
 </header>
 <!-- ========== END HEADER ========== -->
 
   <!-- Sidebar Toggle -->
   <div class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
     <div class="flex items-center py-4">
       <!-- Navigation Toggle -->
       <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
         <span class="sr-only">Toggle Navigation</span>
         <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
       </button>
       <!-- End Navigation Toggle -->
 
       <!-- Breadcrumb -->
       <ol class="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
         <li class="flex items-center text-sm text-gray-800">
           Application Layout
           <svg class="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
           </svg>
         </li>
         <li class="text-sm font-semibold text-gray-800 truncate" aria-current="page">
           Dashboard
         </li>
       </ol>
       <!-- End Breadcrumb -->
     </div>
   </div>
   <!-- End Sidebar Toggle -->
 
   <!-- Sidebar -->
   <div id="application-sidebar" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-500">
     <div class="px-6">
       <a class="flex-none text-xl font-extrabold" href="#" aria-label="Brand">NexusConnect</a>
     </div>
 
     <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
       <ul class="space-y-1.5">
         <li class="hs-accordion">
           <a href="/" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100">
            <svg height="20" width="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 22L2 22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 22V9.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 9.5V13.5M20 22V17.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="#1C274C" stroke-width="1.5"></path> </g></svg>              Home
           </a>
         </li>
 
 
         <li class="hs-accordion">
           <a href="/graph" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100">
            <svg height="20" width="20" class="svg-icon" viewBox="0 0 20 20" stroke-width="2">
							<path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
						</svg>
                          Graphs
           </a>
         </li>
 
         <li class="hs-accordion">
           <a href="/map" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100">
            <svg height="20" width="20" viewBox="-0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Map
          </a>
         </li>
 
         <li class="hs-accordion">
           <a href="/qa" class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100">
<svg height="20" width="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.72266 5.47968C6.81011 4.6032 7.11663 3.7628 7.61402 3.03585C8.11141 2.30889 8.78368 1.71874 9.56895 1.31971C10.3542 0.920684 11.2272 0.725607 12.1077 0.752437C12.9881 0.779267 13.8476 1.02714 14.6071 1.47324C15.3666 1.91935 16.0017 2.54934 16.4539 3.30524C16.9061 4.06113 17.1609 4.91863 17.1948 5.79881C17.2287 6.67899 17.0407 7.55355 16.648 8.342C16.2627 9.11563 15.6925 9.78195 14.9883 10.2821" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.43945 3.35268C8.25207 4.19161 9.22512 4.85854 10.3007 5.31379C11.3763 5.76904 12.5325 6.00332 13.7005 6.00268C14.8492 6.00382 15.9865 5.77762 17.0469 5.33742" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.8232 9.75268C10.5266 9.75268 10.2366 9.84065 9.98989 10.0055C9.74321 10.1703 9.55096 10.4046 9.43742 10.6787C9.32389 10.9527 9.29419 11.2543 9.35206 11.5453C9.40994 11.8363 9.5528 12.1036 9.76258 12.3133C9.97236 12.5231 10.2396 12.666 10.5306 12.7239C10.8216 12.7817 11.1232 12.752 11.3973 12.6385C11.6714 12.525 11.9056 12.3327 12.0704 12.086C12.2353 11.8394 12.3232 11.5493 12.3232 11.2527C12.3232 10.8549 12.1652 10.4733 11.8839 10.192C11.6026 9.91071 11.2211 9.75268 10.8232 9.75268Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.82324 7.17467V8.25268C4.82324 9.04832 5.13931 9.81139 5.70192 10.374C6.26453 10.9366 7.02759 11.2527 7.82324 11.2527H9.24649" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.7005 23.2527C21.7006 21.4693 21.211 19.7202 20.2852 18.196C19.3632 16.6779 18.0438 15.4409 16.4697 14.6187" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2.2002 23.2527C2.2 21.4695 2.68926 19.7206 3.61465 18.1963C4.53542 16.6797 5.85284 15.4435 7.42453 14.621" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>              Q&A w/ Kyle
           </a>
         </li>
       </ul>
     </nav>
   </div>
   <!-- End Sidebar -->
   
 
 </template>

 <style>
/* Styling for the chart container */
.chart-container {
  width: calc(100vw - 64px); /* Adjust the width by subtracting the sidebar width */
  height: 600px; /* Adjust the height to fit your design */
  padding: 20px;
  background-color: #f5f5f5; /* Light grey background */
  border-radius: 8px; /* Rounded corners for the container */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Subtle shadow for depth */
  margin: auto; /* Center the chart container if within a flexible layout */
  margin-left: 150px; /* Adjust the left margin as needed */
}
</style>
