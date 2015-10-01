feature 'Thermosat' do
  scenario 'displays features on the screen' do
    visit '/'
    expect(page).to have_content(20)
    expect(page).to have_content('RESET')
    expect(page).to have_content('POWER SAVING')
  end

  scenario 'can change the temperature' do
    visit '/'

    expect(page).to have_content(21)
  end
end
