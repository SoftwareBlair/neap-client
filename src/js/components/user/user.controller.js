(function() {

  'use strict';

  angular
    .module('myApp.components.user', [])
    .controller('userController', userController);

  userController.$inject = ['userService'];

  function userController (userService) {
    /*jshint validthis: true */
    const vm = this;

    vm.hello = 'Hello User';
    vm.user = {};
    vm.onSubmit = () => {
      userService.login(vm.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      });
      vm.user = {};
    };
  }

})();
