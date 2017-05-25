# == Schema Information
#
# Table name: routes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  waypoints  :string           not null
#  distance   :integer          not null
#  elevation  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Route < ApplicationRecord
  validates :user_id, :name, :waypoints, :distance, :elevation, presence: true

  belongs_to :user
  has_many :workouts
end
