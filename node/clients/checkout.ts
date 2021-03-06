import { InstanceOptions, IOContext, RequestTracingConfig } from '@vtex/api'

import { createTracing } from '../utils/tracing'
import VtexCommerce from './vtexCommerce'

const CHECKOUT_ENDPOINT = 'pvt/configuration/orderForm'

export class Checkout extends VtexCommerce {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, 'checkout', options)
  }

  public getOrderForm(tracingConfig?: RequestTracingConfig) {
    const metric = 'checkout-getOrderForm'
    return this.http.get<OrderFormConfiguration>(CHECKOUT_ENDPOINT, {
      metric,
      tracing: createTracing(metric, tracingConfig),
    })
  }

  public setOrderForm(
    body: OrderFormConfiguration,
    tracingConfig?: RequestTracingConfig
  ) {
    const metric = 'checkout-setOrderForm'
    return this.http.post(CHECKOUT_ENDPOINT, body, {
      metric,
      tracing: createTracing(metric, tracingConfig),
    })
  }
}
