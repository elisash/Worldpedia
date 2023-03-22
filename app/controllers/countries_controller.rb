class CountriesController < ApplicationController
  def index
    countries = Country.all
    render json: countries
  end

  # def create
  #   cyountry = Country.create!(country_params)
  #   if country.valid?
  #   render json: country, status: :created
  #   else
  #     render json: {error: record.errors.full_messages}, status: :invalid
  #   end
  # end

  # private

  # def country_params
  #   params.permit(:name, :capital, :language, :flag, :continent)
  # end
end
