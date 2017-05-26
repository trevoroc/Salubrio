# == Schema Information
#
# Table name: workouts
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  datetime    :datetime         not null
#  duration    :integer          not null
#  distance    :float
#  elevation   :integer
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  route_id    :integer
#

class Workout < ApplicationRecord
  validates :user_id,
            :title,
            :datetime,
            :duration, presence: true

  belongs_to :user
  # belongs_to :route
end
