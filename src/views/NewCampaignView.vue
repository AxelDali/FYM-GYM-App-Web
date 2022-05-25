<template>
  <div class="home">
    <CampaignForm :campaign="campaign" @save="save" @draft="draft"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CampaignForm from '@/components/CampaignForm'
import { addDocument } from '@/firebase'

export default {
  name: 'CrearCamp',
  components: {
    CampaignForm
  },
  data () {
    return {
      campaign: {
        discountType: 'percentage',
        clientType: 'newAccount'
      }
    }
  },
  methods: {
    save (campaign) {
      campaign.published = true
      addDocument('campaigns', campaign)
      this.$router.push({ name: 'camps' })
    },
    draft (campaign) {
      campaign.published = false
      addDocument('campaigns', campaign)
      this.$router.push({ name: 'camps' })
    }
  }
}
</script>
