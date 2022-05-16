<template>
  <div class="home">
    <CampaignForm :campaign="campaign"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CampaignForm from '@/components/CampaignForm'

export default {
  name: 'CrearCamp',
  components: {
    CampaignForm
  },
  data () {
    return {
      campaign: {
        name: '',
        period: '',
        discount: ''
      }
    }
  }
}
</script>
