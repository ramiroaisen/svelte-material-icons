type VersionComparator = '<' | '<=' | '!=' | '==' | '>=' | '>' | '~=';

interface Requirement {
  originalText: string;
  line: number;
  name?: string;
  versionComparator?: VersionComparator;
  version?: string;
  extras?: string;
}

/**
 * Converts a requirements file into an array of parsed requirements, with data
 * such as name, version, etc.
 * @param requirementsFile A requirements.txt file as a string
 */
export function parseRequirementsFile(requirementsFile: string): Requirement[] {
  return requirementsFile.split('\n').map((requirementText, line) => {
    const requirement: Requirement = { originalText: requirementText, line };
    const trimmedText = requirementText.trim();

    // Quick returns for cases we cannot remediate
    // - Empty line i.e. ''
    // - 'editable' packages i.e. '-e git://git.myproject.org/MyProject.git#egg=MyProject'
    // - Comments i.e. # This is a comment
    // - Local files i.e. file:../../lib/project#egg=MyProject
    if (
      requirementText === '' ||
      trimmedText.startsWith('-e') ||
      trimmedText.startsWith('#') ||
      trimmedText.startsWith('file:')
    ) {
      return requirement;
    }

    // Regex to match against a Python package specifier. Any invalid lines (or
    // lines we can't handle) should have been returned this point.
    const regex = /([A-Z0-9]*)(!=|==|>=|<=|>|<|~=)(\d*\.?\d*\.?\d*)(.*)/i;
    const result = regex.exec(requirementText);

    if (result !== null) {
      requirement.name = result[1];
      requirement.versionComparator = result[2] as VersionComparator;
      requirement.version = result[3];
      requirement.extras = result[4];
    }

    return requirement;
  });
}
