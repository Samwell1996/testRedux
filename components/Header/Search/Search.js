import React from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import { s } from './styles';

function Search({ search, setSearch }) {
  return (
    <View style={s.containerHeader}>
      <Ionicons name="md-search" size={25} style={s.icon} />
      <TextInput
        style={s.input}
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
      />
      {search.length > 0 && (
        <TouchableOpacity
          style={s.containerCancel}
          onPress={() => setSearch('')}
        >
          <Text style={s.textCancel}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

Search.propTypes = {
  search: T.func,
  setSearch: T.func,
};

export default Search;
