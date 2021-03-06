namespace photoapp.Controllers {

    export class HomeController {
        public file;

        public pickFile() {
          this.filepickerService.pick(
            { mimetype: 'image/*' },
            this.fileUploaded.bind(this)
          );
        }

        public fileUploaded(file) {
          this.file = file;
          this.$scope.$apply();
        }

        constructor(private filepickerService, private $scope: ng.IScope) { }
    }

    angular.module('photoapp').controller('HomeController', HomeController);


    export class AboutController {
        public message = 'Hello from the about page!';

    export class EditController {
      public file;

      public save() {
        this.photoService.save(this.file).then(() => {
          this.$state.go('home');
        });
      }

      constructor(
        private photoService:photoapp.Services.PhotoService,
        private $state:ng.ui.IStateService,
        private $stateParams:ng.ui.IStateParamsService
      ) {
        let fileId = $stateParams['id'];
        this.file = photoService.get(fileId);
      }
    }
  }
