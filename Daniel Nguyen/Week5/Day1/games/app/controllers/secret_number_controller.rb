class SecretNumberController < ApplicationController
  def result
    @secret_number = rand(1..10)
  end
end
