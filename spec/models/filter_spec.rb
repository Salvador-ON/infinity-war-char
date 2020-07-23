require 'rails_helper'

RSpec.describe Filter, type: :model do
  it 'should saved user and filter' do
    u1 = User.new(email: 'ut1@ut1.com',
                  name: 'user test 1',
                  password: '123456',
                  password_confirmation: '123456')
    expect(u1.valid?).to eq(true)
    expect(u1.save).to eq(true)
    expect(Filter.count).to eq(1)
    expect(Filter.last.status).to eq('0')
    expect(Filter.last.id).to eq(u1.id)
  end

  it 'should not create filter if user can not be saved' do
    u1 = User.new(email: 'ut1@ut1.com',
                  password: '123456',
                  password_confirmation: '123456')
    u1.save
    expect(Filter.count).to eq(0)
  end

  it 'should update filter' do
    create_client_user
    Filter.find(1).update(status: 'A')
    expect(Filter.last.status).to eq('A')
  end
end
