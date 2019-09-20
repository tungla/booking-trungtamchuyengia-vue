<template>
	<div class=".container-fluid" id="second_step">
		<div class="row" id="booking_header_row">
			<div class="col-6" id="booking_header">
				<p>Chọn ngày/giờ khám</p>
			</div>
		</div>
		<div class="row" id="booking_date_row">
			<button class="col-2 btn" id="booking_date_today" v-on:click="clickedToday" v-bind:style= "btnTodayClicked ? 'background-color: yellow; color: black;' : 'background-color: grey; color:white'">
				<p>Hôm nay</p>
			</button>
			<button class="col-2 btn" id="booking_date_tomorrow" v-on:click="clickedTomorrow" v-bind:style= "btnTomorrowClicked ? 'background-color: yellow; color: black;' : 'background-color: grey; color:white'">
				<p>Ngày mai</p>
			</button>
			<button class="col-2 btn" id="booking_date_ngaykia" v-on:click="clickedNgayKia" v-bind:style= "btnNgayKiaClicked ? 'background-color: yellow; color: black;' : 'background-color: grey; color:white'">
				<p>Ngày kia</p>
			</button>
		</div>
		<div class="row" id="hour_row_1">
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('8:00')">
				<p>8:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('8:30')">
				<p>8:30</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('9:00')">
				<p>9:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('9:30')">
				<p>9:30</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('10:00')">
				<p>10:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('10:30')">
				<p>10:30</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('11:00')">
				<p>11:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('11:30')">
				<p>11:30</p>
			</button>
		</div>
		<div class="row" id="hour_row_1">
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('12:00')">
				<p>12:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('12:30')">
				<p>12:30</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('13:00')">
				<p>13:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('13:30')">
				<p>13:30</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('14:00')">
				<p>14:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('14:30')">
				<p>14:30</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('15:00')">
				<p>15:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('15:30')">
				<p>15:30</p>
			</button>
		</div>
		<div class="row" id="hour_row_1">
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('16:00')">
				<p>16:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('16:30')">
				<p>16:30</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('17:00')">
				<p>17:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('17:30')">
				<p>17:30</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('18:00')">
				<p>18:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('18:30')">
				<p>18:30</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('19:00')">
				<p>19:00</p>
			</button>
			<button class="col-1 btn" id="hour" v-on:click="clickedHour('19:30')">
				<p>19:30</p>
			</button>
		</div>
		<div class="row" id="submit_buttons">
			<button class="col-3 btn" id="back_to_home" v-on:click="clickCancel">Huỷ</button>
			<button class="col-5 btn" id="submit_booking" v-on:click="clickSubmitBooking">Đặt chỗ</button>
		</div>
	</div>
</template>

<style scoped>
#second_step {
	background-image: url('~@/assets/background_first_step.jpg');
	height: 100vh;
	overflow: auto;
}

#submit_booking {
	background-color: #0067cc;
	color: white;
	margin-left: 2px;
}

#back_to_home {
	background-color: red;
	color: white;
}

#submit_booking, #back_to_home {
	margin-top: 0.5%;
	font-size: 25px;
}

#submit_buttons {
	margin-left: 24.5%;
	width: 75%;
}

#booking_date_today, #booking_date_tomorrow, #booking_date_ngaykia {
	width: 20%;
	padding-top: 1%;
	background-color: grey;
	display: inline-block;
	font-size: 25px;
	color: white;
	font-weight: bold;
	text-align: center;
	border-radius: 0;
}

#hour {
	width: 5%;
	background-color: white;
	display: inline-block;
	font-size: 14px;
	color: black;
	font-weight: bold;
	text-align: center;
	border: solid 1px;
}

#hour:focus {
	background-color: black;
	color: white;
}

#create_booking_msg {
	text-align: center;
}

/*#booking_date_today:focus, #booking_date_tomorrow:focus, #booking_date_ngaykia:focus {
	background-color: white;
	color: black;
	font-weight: bold;
}*/

#booking_header_row {
	margin-top: 10%;
	margin-left: 24.5%;
	width: 100%;
}

#booking_date_row {
	margin-left: 24.5%;
	width: 100%;
}

#hour_row_1 {
	margin-left: 24.5%;
	width: 75%;
}

#booking_header {
	padding-top: 0%;
	margin-bottom: 0;
	background-color: #0067cc;
	text-align: left;
}

#booking_header > p {
	font-size: 35px;
	color: white;
	font-weight: bold;
}

form > div {
	width: 100%;
	text-align:center;
	height: 50px;
}

#input_phoneNumber {
	height: 120%;
}

form > div > div {
	display: inline-block;
	width: 100%;
	height: 100%;
}

form > div > input {
	display: block;
}

form > button {
	margin-bottom: 2%;
	height: 100%;
}

#check_booked {
	background-color: grey;
	font-size: 24px;
	font-weight: bold;
	width: 30%;
}
</style>

<script>
import bookingApi from '../apis/booking.js'

export default {
  name: 'BookingSecondStep',
  data: function() {
  	return {
  		btnTodayClicked: false,
  		btnTomorrowClicked: false,
  		btnNgayKiaClicked: false,
  		txtSelectedDay: '',
  		txtSelectedMonth: '',
  		txtSelectedYear: '',
  		txtSelectedHour: '',
  		createBookingSuccess: false,
  		createBookingSuccessMsg: ''
  	}
  },
  components: {
  
  },
  methods: {
  	navigateToBookingSecondStepPage() {
  		this.current_url = window.location.href;
  		window.location.href = this.current_url + 'booking/' + this.phoneNumber;
  	},
  	clickedToday() {
  		this.btnTodayClicked = true;
  		this.btnTomorrowClicked = false;
  		this.btnNgayKiaClicked = false;
  		var txtSelectedDate = new Date();
  		this.txtSelectedDay = txtSelectedDate.getDate();
  		this.txtSelectedMonth = txtSelectedDate.getMonth() + 1;
  		this.txtSelectedYear = txtSelectedDate.getYear() + 1900;
  	},
  	clickedTomorrow() {
  		this.btnTodayClicked = false;
  		this.btnTomorrowClicked = true;
  		this.btnNgayKiaClicked = false;
  		var txtSelectedDate = new Date();
  		this.txtSelectedDay = txtSelectedDate.getDate() + 1;
  		this.txtSelectedMonth = txtSelectedDate.getMonth() + 1;
  		this.txtSelectedYear = txtSelectedDate.getYear() + 1900;
  	},
  	clickedNgayKia() {
  		this.btnTodayClicked = false;
  		this.btnTomorrowClicked = false;
  		this.btnNgayKiaClicked = true;
  		var txtSelectedDate = new Date();
  		this.txtSelectedDay = txtSelectedDate.getDate() + 2;
  		this.txtSelectedMonth = txtSelectedDate.getMonth() + 1;
  		this.txtSelectedYear = txtSelectedDate.getYear() + 1900;
  	},
  	clickedHour: function (value) {
  		this.txtSelectedHour = value;
  	},
  	clickSubmitBooking() {
  		var bookingDate = this.txtSelectedYear + '-' + this.txtSelectedMonth + '-' + this.txtSelectedDay + ' ' + this.txtSelectedHour + ':00';
  		if (this.txtSelectedHour == '') {
  			alert('Vui lòng chọn giờ bạn muốn khám!');
  		} else {
	  		bookingApi.createBooking(this.$route.params.phoneNumber, bookingDate).then((response) => {
	  			if (Math.round(response.status/100) == 2) {
	 				this.createBookingSuccess = true;
	 				window.location.href = window.location.href + '/success';
	  			} else {
	  				this.createBookingSuccess = false;
	  				this.createBookingSuccessMsg = response.data.message + ' (400)';
	  				alert(this.createBookingSuccessMsg);
	  			}
	  		})
	  	}
  	},
  	clickCancel() {
  		bookingApi.backToHome();
  	}
  },
  mounted() {

  }
}
</script>