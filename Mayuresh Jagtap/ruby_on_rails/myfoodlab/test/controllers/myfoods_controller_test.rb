require 'test_helper'

class MyfoodsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get myfoods_new_url
    assert_response :success
  end

end
