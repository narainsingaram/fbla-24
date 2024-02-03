<template>
    <div data-theme="cupcake">
      <Header></Header>
      <div class="min-h-screen flex flex-col items-center justify-center">
        <!-- Header for the first graph -->
        <h1 class="text-3xl font-semibold mb-4">Graph 1</h1>
  
        <!-- Container for the first graph with increased size -->
        <div class="bg-white p-8 rounded-lg shadow-md mb-8">
          <Graph />
        </div>
  
        <!-- Header for the second graph -->
        <h1 class="text-3xl font-semibold mb-4">Graph 2</h1>
  
        <!-- Container for the second graph with increased size -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <ScatterLatLong></ScatterLatLong>
        </div>
      </div>
      <GeoSpatial />
    </div>
  </template>
  