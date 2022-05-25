<template>
  <div class="camp">
    <CampaignForm v-if="loaded" :campaign="campaign" edit=true @save="save" @draft="draft"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CampaignForm from '@/components/CampaignForm'
import { getDocument, updateDocument } from '@/firebase'

export default {
  name: 'CrearCamp',
  components: {
    CampaignForm
  },
  props: {
    id: { type: String, required: true }
  },
  data () {
    return {
      campaign: null,
      loaded: false
    }
  },
  async created () {
    this.campaign = await getDocument('campaigns', this.id)
    this.loaded = true
  },
  methods: {
    save (campaign) {
      campaign.published = true
      updateDocument('campaigns', this.id, campaign)
      this.$router.push({ name: 'camps' })
    },
    draft (campaign) {
      campaign.published = false
      updateDocument('campaigns', this.id, campaign)
      this.$router.push({ name: 'camps' })
    }
  }
}
</script>
