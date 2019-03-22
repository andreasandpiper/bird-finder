class Api::V1::PaymentController < ApplicationController

  def charge
    token = params[:stripeToken]
    amount = params[:amount].to_i
    # TODO format amout to use correct format.

    charge = Stripe::Charge.create({
        amount: 2000,
        currency: 'usd',
        description: 'Example charge',
        source: token,
    })

    status = charge.captured ? 'ok' : 'payment not captured'
    render json: { status: status }
  end
end
