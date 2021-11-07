class AnswerListsController < ApplicationController

    get "/answerlists" do
        authenticate
        @user = current_account

        # binding.pry
        @answer_lists = @user.answer_lists

        erb :'answer_lists/select_list'
    end

    post "/answerlists" do
        authenticate
        @user = current_account
        # binding.pry

        @answer_list = AnswerList.create(list_name: params[:list_name], user_id: @user.id)

        # binding.pry
        params[:answers].each do |answer|
            Answer.create(content: answer, answer_list_id: @answer_list.id)
        end

        @answers = @answer_list.answers.select {|answer| answer!=""}

        # binding.pry
        erb :'answer_lists/select_list'
    end

    get "/answerlists/new" do
        authenticate
        @user = current_account
        # binding.pry

        erb :'answer_lists/new_list'
    end

    get "/answerlists/:id" do
        authenticate
        @list = AnswerList.find_by(id: params[:id])

        check_list

        @user = current_account
        erb :'answer_lists/select_list'
    end

    get "/answerlists/:id/update" do
        authenticate
        @list = AnswerList.find_by(id: params[:id])

        check_list

        @user = current_account
        erb :'answer_lists/update_list'
    end

    patch "/answerlists/:id" do
        authenticate
        @list = AnswerList.find_by(id: params[:id])

        check_list

        @user = current_account

        @list.list_name = params[:list_name]

        counter = 0
        while counter < 20
            old_answer = @list.answers[counter].content
            new_answer = params[:answers][counter]

            if old_answer != new_answer
                @list.answers[counter].content = params[:answers][counter]
                @list.answers[counter].save
            end
            counter += 1
        end
        @list.save
        redirect to '/answerlists'
    end

    delete "/answerlists/:id/delete" do
        authenticate
        @list = AnswerList.find_by(id: params[:id])

        check_list

        @user = current_account

        @list.destroy
        redirect to '/answerlists'
    end

end
