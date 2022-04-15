import {Button} from '@material-ui/core';
import * as React from 'react';
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  DateField,
  EmailField,
  NumberField,
  ArrayField,
  SimpleFormIterator,
  SingleFieldList,
  ChipField,
  TopToolbar,
  SortButton,
  ExportButton,
  FunctionField,
  ReferenceArrayField,
  ReferenceField,
} from 'react-admin';
import {db} from './App';
import {StringToLabelObject} from './helpers';
import PlanStatusField from './PlanStatusField';
import CreatePlanButton from './CreatePlanButton';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
} from 'firebase/firestore';
import {toast} from 'react-toastify';

const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

const getPlans = async uid => {
  const q = query(
    collection(db, 'plans'),
    where('user', '==', uid),
    orderBy('lastupdate', 'desc'),
  );
  const plans = await getDocs(q);
  return plans.docs.map(d => d.data());
};

const getPlanStatusString = record => {
  if (record.status === 3) {
    return 'Complete';
  }
  if (record.status === 2) {
    return 'Pending';
  }
  return 'Uninitialized';
};

const ListActions = () => (
  <TopToolbar>
    <SortButton fields={['planStatus', 'name', 'email']} />
    <ExportButton />
  </TopToolbar>
);

export const UsersList = props => {
  const [loading, setLoading] = React.useState(false);
  return (
    <List {...props} bulkActionButtons={false} actions={<ListActions />}>
      <Datagrid>
        <TextField source="name" />
        <EmailField source="email" />
        <PlanStatusField source="planStatus" />
        <CreatePlanButton
          loading={loading}
          setLoading={setLoading}
          history={props.history}
        />
        <ShowButton label="" />
        <EditButton label="" />
        {/* <DeleteButton label="" redirect={false} /> */}
      </Datagrid>
    </List>
  );
};

export const UsersShow = props => {
  const [loading, setLoading] = React.useState(false);
  const {id} = props;
  React.useEffect(() => {
    const checkPlans = async () => {
      const plans = await getPlans(id);
    };
    checkPlans();
  }, [id]);
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="name" />
        <EmailField source="email" />
        <FunctionField label="Plan status" render={getPlanStatusString} />
        <DateField source="dob" label="Date of birth" />
        <TextField source="equipment" />
        <TextField source="experience" />
        <TextField source="gender" />
        <TextField source="goal" />
        <TextField source="unit" />
        <NumberField source="height" />
        <NumberField source="weight" />
        <TextField source="injuries" />
        <TextField source="lifestyle" />
        <TextField source="medications" />
        <TextField source="stressLevel" />
        <ArrayField source="nutrition">
          <SingleFieldList linkType={false}>
            <StringToLabelObject>
              <ChipField source="label" />
            </StringToLabelObject>
          </SingleFieldList>
        </ArrayField>
        <CreatePlanButton
          loading={loading}
          setLoading={setLoading}
          history={props.history}
        />
      </SimpleShowLayout>
    </Show>
  );
};

export const UsersCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const UsersEdit = props => {
  const [loading, setLoading] = React.useState(false);
  const {id} = props;
  React.useEffect(() => {
    const checkPlans = async () => {
      const plans = await getPlans(id);
    };
    checkPlans();
  }, [id]);
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextField source="name" />
        <EmailField source="email" />
        <FunctionField label="Plan status" render={getPlanStatusString} />
        <DateField source="dob" label="Date of birth" />
        <TextField source="equipment" />
        <TextField source="experience" />
        <TextField source="gender" />
        <TextField source="goal" />
        <TextField source="unit" />
        <NumberField source="height" />
        <NumberField source="weight" />
        <TextField source="injuries" />
        <TextField source="lifestyle" />
        <TextField source="medications" />
        <TextField source="stressLevel" />
        <ArrayField source="nutrition">
          <SingleFieldList linkType={false}>
            <StringToLabelObject>
              <ChipField source="label" />
            </StringToLabelObject>
          </SingleFieldList>
        </ArrayField>
        <CreatePlanButton
          loading={loading}
          setLoading={setLoading}
          history={props.history}
        />
      </SimpleForm>
    </Edit>
  );
};
