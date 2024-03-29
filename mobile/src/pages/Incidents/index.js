import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import api from "../../services/api";

import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const navigateToDetail = incident => {
    navigation.navigate("Detail", { incident });
  };
  const loadIncidents = async () => {
    if (isLoading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setIsLoading(true);

    const { data, headers } = await api.get(`incidents`, {
      params: { page }
    });

    setIncidents([...incidents, ...data]);
    setTotal(headers["x-total-count"]);
    console.log("page:", page);
    setPage(page + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia!
      </Text>

      <FlatList
        style={styles.incidentList}
        data={incidents}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.5}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={true}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </Text>
            <TouchableOpacity
              style={styles.detailsBtn}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsBtnText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
