class User < ApplicationRecord
  before_save :downcase_email
  after_create :create_filter
  has_secure_password
  has_one :filter, dependent: :destroy

  validates :name, presence: true, length: { maximum: 50 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze
  validates :email, presence: true, length: { maximum: 55 }, format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }

  validates :password, presence: true, length: { minimum: 6 }
  validates :password_confirmation, presence: true, length: { minimum: 6 }

  private

  def downcase_email
    email.downcase!
  end

  def create_filter
    Filter.create(status: '0', user_id: id)
  end
end
