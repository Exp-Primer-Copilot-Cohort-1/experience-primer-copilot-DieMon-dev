function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'modules/skills/views/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToConttroller: true,
    scope: {
      member'='
    }
  };
}
