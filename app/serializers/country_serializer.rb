class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :capital, :language, :flag, :continent, :fun_fact
end
