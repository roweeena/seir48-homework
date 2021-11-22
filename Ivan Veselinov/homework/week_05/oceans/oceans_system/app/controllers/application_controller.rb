class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token # for hand written post forms!!!!
end
