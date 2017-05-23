# == Schema Information
#
# Table name: workouts
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  title        :string           not null
#  datetime     :datetime         not null
#  workout_type :string           not null
#  duration     :integer          not null
#  distance     :integer
#  elevation    :integer
#  description  :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Workout < ApplicationRecord
  validates :user_id,
            :title,
            :datetime,
            :workout_type,
            :duration, presence: true

  belongs_to :user
  # has_one :route TODO: Uncomment when routes are implemented
end
