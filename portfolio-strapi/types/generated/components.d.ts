import type { Struct, Schema } from '@strapi/strapi';

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'project';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    projectTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    projectSummary: Schema.Attribute.Text;
    designTools: Schema.Attribute.RichText;
    codingTools: Schema.Attribute.RichText;
    projectImg: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.project': ProjectProject;
    }
  }
}
