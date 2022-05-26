<template>
  <br>
  <br>
  <div class="row">
    <div class="col md-9">
      <h1 style="font-size:32px">Panel de <span class="styleTitle"> Control</span></h1>
    </div>
  </div>
  <div class="row align-items-start ">
    <div class="col-md-8">
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
        :style="myStyles"
      />
    </div>
    <div class="col-md-4 text-center">
      <br><b></b>
      <h1 style="font-size:32px">Fecha de <span class="styleTitle"> hoy</span></h1>
      <h1>Miercoles 25 de mayo del 2022</h1><br><br><br>
      <h1 style="font-size:32px">Aforo actual:</h1><br>
      <h1 style="font-size:60px">80 %</h1><br>
      <h1 style="font-size:32px">Personas</h1>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 150
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    myStyles () {
      return {
        height: `${100}px`,
        position: 'relative'
      }
    }
  },
  data () {
    return {
      chartData: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [
          {
            label: 'Asistencia',
            data: [100, 30, 45, 56, 85, 63, 35],
            backgroundColor: '#F29F05'
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
