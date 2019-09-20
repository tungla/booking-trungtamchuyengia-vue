import HTTP, {domain} from './base.js'

export default {
  backToHome() {
    window.location.href = domain
  },
  goToBookedPage(phoneNumber) {
  	window.location.href = domain + 'booked/' + phoneNumber
  },
  createBooking (phone, datetime) {
    return HTTP.post('api/booking', {
      phone: phone,
      booking_time: datetime
    })
  },
  getBookedTimeOfPhoneNumber (phone) {
  	return HTTP.post('api/booked', {
  		phone: phone
  	})
  },
  getBookedTimeByDate(date) {
  	return HTTP.post('api/booked-by-date', {
  		date: date
  	})
  },
  deleteBookedTime (id) {
  	return HTTP.delete('api/booked/' + id)
  },
  navigateToBookedPage(phoneNumber) {
	window.location.href = domain + 'booked/' + phoneNumber;
  },
  navigateToBookingSecondStepPage(phoneNumber) {
  	window.location.href = domain + 'booking/' + phoneNumber;
  }
}