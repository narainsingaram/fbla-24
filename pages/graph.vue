<template>
  <div data-theme="cupcake">
    <Header></Header>
    <div class="min-h-screen flex flex-col items-center justify-center px-4">
      <!-- First graph -->
      <div class="max-w-xl w-full m-4 mb-8">
        <h1 class="text-3xl font-semibold mb-4 text-center">Organization Types Bar Graph</h1>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <Graph />
        </div>
      </div>
      
      <!-- Second graph -->
      <div class="max-w-xl w-full m-4">
        <h1 class="text-3xl font-semibold mb-4 text-center">Organization Locations Scatterplot</h1>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <ScatterLatLong></ScatterLatLong>
        </div>
      </div>
    </div>
  </div>
</template>
