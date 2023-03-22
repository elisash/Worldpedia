class CreateCountries < ActiveRecord::Migration[6.1]
  def change
    create_table :countries do |t|
      t.string :capital
      t.string :name
      t.string :continent
      t.string :flag
      t.string :language
      t.string :fun_fact
      t.timestamps
    end
  end
end
