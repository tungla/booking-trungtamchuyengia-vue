<template>
	<div class=".container-fluid" id="booked_body">
		<div class="row">
			<div class="col-3">
			</div>
			<div class="col-8" id="datepicker">
				<datepicker v-model="searchingDate" placeholder="Chọn ngày để tìm ..."></datepicker>
				<button class="btn-sm btn-primary" v-on:click="searchBookingByDate">Tìm</button>
			</div>
		</div>
		<div class="row">
			<div class="col-3">
			</div>
			<table class="table col-6" id="booked_table">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">SĐT</th>
			      <th scope="col">Ngày giờ</th>
			      <th scope="col"></th>
			    </tr>
			  </thead>
			  <tbody v-for="(bookedItem, bookedListItemIndex) in bookedList">
			  	<tr>
			  		<th>{{ bookedListItemIndex + 1}}</th>
			  		<th>{{ bookedItem.phone }}</th>
			  		<th>{{ bookedItem.booking_time }}</th>
			  		<th><button class="btn btn-danger" data-toggle="modal" data-target="#confirm_delete_modal">Huỷ đặt lịch</button></th>
			  		<!-- Modal to confirm delete -->
			  	</tr>
			  	<div class="modal" tabindex="-1" role="dialog" id="confirm_delete_modal">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" style="color: black;">Huỷ đặt lịch</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Không">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body" style="color: black;">
				        <p>Bạn có chắc chắn muốn huỷ đặt lịch?</p>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary btn-warning" data-dismiss="modal">Không</button>
				        <button type="button" class="btn btn-primary" v-on:click="deleteBookedTime(bookedItem)">Có</button>
				      </div>
				    </div>
				  </div>
				</div>
            </tbody>
			</table>
		</div>
		<div class="row">
			<div class="col-12">
				<button class="btn btn-warning" id="btn_back_to_home" v-on:click="backToHome">Quay lại trang chủ</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
/*
#btn_back_to_home {
	height: 150%;
	float: center;
}

#confirm_delele_modal * {
	color: black;
}

#

#booked_table > tbody,thead > tr > th {
	color: white;
}
*/

#booked_body {
	background-image: url('~@/assets/background_first_step.jpg');
	height: 100vh;
	overflow: auto;
}

#datepicker {
	margin-top: 2%;
	margin-bottom: 2%;
}

#datepicker > * {
	display: inline-block;
	float: left;
	margin-right: 2%;
}

#datepicker > * {
	display: inline-block;
	float: left;
	margin-right: 2%;
}

#booked_table {
	background-color: #0067cc;
	color: white;
}

</style>

<script>
import bookingApi from '../apis/booking.js'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'BookedPage',
  data: function() {
  	return {
  		bookedList: [],
  		searchingDate: ''
  	}
  },
  components: {
  	Datepicker
  },
  methods: {
  	getBookedTimeOfPhone() {
		bookingApi.getBookedTimeOfPhoneNumber(this.$route.params.phoneNumber).then((response) => {
			this.bookedList = response.data;
		})
  	},
  	deleteBookedTime(bookedItem) {
  		bookingApi.deleteBookedTime(bookedItem.id).then((response) => {
			alert('Đã huỷ đặt lịch của bạn thành công');
			if (searchDate != '') {
				bookingApi.getBookedTimeByDate(searchDate).then((response) =>
		  		{
		  			this.bookedList = response.data;				
		  		})
			}
		})
  	},
  	searchBookingByDate: function(searchingDate) {
  		var day = this.searchingDate.getDate();
  		var month = this.searchingDate.getMonth() + 1;
  		var year = 1900 + this.searchingDate.getYear();
  		var searchDate = year + '-' + month + '-' + day;
  		bookingApi.getBookedTimeByDate(searchDate).then((response) =>
  		{
  			this.bookedList = response.data;				
  		})
  	},
  	backToHome() {
  		bookingApi.backToHome();
  	}
  },
  mounted() {

  }
}
</script>