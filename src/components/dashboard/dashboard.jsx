import React from "react";
import Sidebar from "../common/sidebar";
import Header from "../common/header";
import Footer from "../common/footer";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import "./dashboard.css";

import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Dashboard = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [modal, setModal] = useState(false);
  const [rooms, setRooms] = useState([]);

  const toggle = () => setModal(!modal);
  useEffect(() => {
    const fetchRooms = async () => {
      const q = query(
        collection(db, "rooms"),
        where("status", "==", "available")
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setRooms(data);
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <section className="dashboard">
          <div className="content">
            <h2>{t("dashboard.title")}</h2>
            <p>{t("dashboard.description")}</p>
            <Button color="primary" onClick={toggle}>
              {t("dashboard.bookNow")}
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                {t("dashboard.bookNow")}
              </ModalHeader>
              <ModalBody>
                <h3>{t("dashboard.selectRoom")}</h3>
                <ul>
                  {rooms.map((room) => (
                    <li key={room.id}>
                      <Link to={`/room/${room.id}`}>{room.name}</Link>
                    </li>
                  ))}
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                  {t("dashboard.cancel")}
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
