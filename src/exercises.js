// in src/posts.js
import * as React from 'react';
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  DateField,
  ImageField,
  ImageInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  FileInput,
  FileField,
  ArrayInput,
  SimpleFormIterator,
  ChipField,
  ArrayField,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const ExercisesFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

// const ReferenceFilter = (props) => (
//   <Filter {...props}>
//     <ReferenceInput
//       label="Organization"
//       source="user.id"
//       reference="users"
//       allowEmpty
//     >
//       <SelectInput optionText="name" />
//     </ReferenceInput>
//   </Filter>
// );

export const ExerciseList = props => (
  <List
    {...props}
    sort={{field: 'name', order: 'ASC'}}
    // filters={<ExercisesFilter />}
    // filter={{ updatedby: "test@example.com" }}
  >
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      {/* <RichTextField source="description" /> */}
      <ChipField source="type" />
      <ChipField source="area" />
      <ChipField source="level" />
      <TextField source="muscles" />
      {/* <ReferenceField label="User" source="user_id" reference="users">
        <TextField source="name" />
      </ReferenceField> */}
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const ExerciseShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" options={{multiline: true}} />
      <ChipField source="type" />
      <ChipField source="area" />
      <ChipField source="level" />
      <TextField source="muscles" />
      <TextField source="videoUrl" type="url" />
    </SimpleShowLayout>
  </Show>
);

export const ExerciseCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" options={{multiline: true}} />
      <SelectInput
        source="type"
        choices={[
          {id: 'strength', name: 'strength'},
          {id: 'flexibility', name: 'flexibility'},
          {id: 'cardiovascular', name: 'cardiovascular'},
          {id: 'balance', name: 'balance'},
        ]}
      />
      <SelectInput
        source="area"
        choices={[
          {id: 'upper', name: 'upper'},
          {id: 'lower', name: 'lower'},
          {id: 'full', name: 'full'},
        ]}
      />
      <SelectInput
        source="level"
        choices={[
          {id: 'beginner', name: 'beginner'},
          {id: 'intermediate', name: 'intermediate'},
          {id: 'advanced', name: 'advanced'},
        ]}
      />
      <ArrayInput source="muscles">
        <SimpleFormIterator>
          <TextInput label="muscle" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="videoUrl" type="url" />
    </SimpleForm>
  </Create>
);

export const ExerciseEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" options={{multiline: true}} />
      <SelectInput
        source="type"
        choices={[
          {id: 'strength', name: 'strength'},
          {id: 'flexibility', name: 'flexibility'},
          {id: 'cardiovascular', name: 'cardiovascular'},
          {id: 'balance', name: 'balance'},
        ]}
      />
      <SelectInput
        source="area"
        choices={[
          {id: 'upper', name: 'upper'},
          {id: 'lower', name: 'lower'},
          {id: 'full', name: 'full'},
        ]}
      />
      <SelectInput
        source="level"
        choices={[
          {id: 'beginner', name: 'beginner'},
          {id: 'intermediate', name: 'intermediate'},
          {id: 'advanced', name: 'advanced'},
        ]}
      />
      <ArrayInput source="muscles">
        <SimpleFormIterator>
          <TextInput label="muscle" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="videoUrl" type="url" />
    </SimpleForm>
  </Edit>
);
