function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    controller: 'SkillsMemberContorler',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
        member: '='
    }
  };
}