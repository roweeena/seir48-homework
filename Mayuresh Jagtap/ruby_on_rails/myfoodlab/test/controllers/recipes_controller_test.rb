require 'test_helper'

class RecipesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get recipes_new_url
    assert_response :success
  end

end
