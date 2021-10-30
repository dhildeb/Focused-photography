<template>
  <div>
    <div v-if="!paidFor">
      <p>{{ product.description }}</p>
      <div ref="paypal"></div>
    </div>

    <div v-if="paidFor">
      <h1>Thank you for your purchase!</h1>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { accountService } from '../services/AccountService'
import Notification from '../utils/Notification'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  data: function() {
    return {
      loaded: false,
      paidFor: false,
      product: {
        price: 0.01,
        description: 'description',
        img: 'img'
      }
    }
  },
  mounted: function() {
    const script = document.createElement('script')
    script.src =
      'https://www.paypal.com/sdk/js?client-id=AZJVgiXlFlGHLBfEFtfC68I5zg00NAV8MAaCJP0C4KHMRXh5-Prp9VlPSiOirzNNllSj8baZ6DrLJWVQ'
    script.addEventListener('load', this.setLoaded)
    document.body.appendChild(script)
  },
  methods: {
    setLoaded: function() {
      this.loaded = true
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: 'USD',
                    value: this.product.price
                  }
                }
              ]
            })
          },
          onApprove: async(data, actions) => {
            const order = await actions.order.capture()
            const account = computed(() => AppState.account)
            this.paidFor = true
            console.log(order)
            try {
              await accountService.buyNextLesson(account.id)
              console.log(account)
            } catch (error) {
              Notification.toast(error.message)
            }
          },
          onError: err => {
            console.log(err)
            Notification.toast(err)
          }
        })
        .render(this.$refs.paypal)
    }
  },

  setup() {
    const state = reactive({
      account: computed(() => AppState.account),
      info: computed(() => AppState.registerInfo)
    })
    return {
      async buyNextLesson() {
        try {
          await accountService.buyNextLesson(state.account.id)
          console.log(state.account)
        } catch (error) {
          Notification.toast(error.message)
        }
      }
    }
  }

}
</script>
