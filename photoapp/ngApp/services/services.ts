namespace photoapp.Services {

  export class PhotoService {
      private PhotoResource;

      public get(id) {
        return this.PhotoResource.get({id:id});
      }

      public list() {
        return this.PhotoResource.query()
      }

      public save(file) {
        return this.PhotoResource.save(file).$promise;
      }

      constructor($resource:ng.resource.IResourceService) {
        this.PhotoResource = $resource('/api/file');
      }

  }

  angular.module('photoapp').service('photoService', PhotoService);

}
