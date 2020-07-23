class Filter < ApplicationRecord
  belongs_to :user
  validates :status, presence: true, length: { minimum: 1, maximum: 1 }
end
