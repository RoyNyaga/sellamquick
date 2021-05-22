class AuthenticateUser
  prepend SimpleCommand

  def initialize(phone, password)
    @phone = phone
    @password = password
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :phone, :password

  def user
    user = User.find_by_phone(phone)
    return user if user && user.authenticate(password)

    errors.add :user_authentication, 'invalid credentials'
    nil
  end
end 