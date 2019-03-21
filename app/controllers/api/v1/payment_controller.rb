class Api::V1::PaymentController < ApplicationController

  def charge
    # Token is created using Checkout or Elements!
    # Get the payment token ID submitted by the form:
    token = params[:stripeToken]
    amount = params[:amount].to_i
    # TODO format amout to use correct format.

    charge = Stripe::Charge.create({
        amount: 2000,
        currency: 'usd',
        description: 'Example charge',
        source: token,
    })

  end
end
