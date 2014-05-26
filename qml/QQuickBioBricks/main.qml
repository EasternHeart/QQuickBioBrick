import QtQuick 2.1
import QtQuick.Controls 1.0
import QtQuick.Layouts 1.0

import "data.js" as DataLibrary

ApplicationWindow {
    id: window
    title: qsTr("Hello World")
    width: 640
    height: 480
    menuBar: MenuBar {
        /*Menu {
            title: qsTr("File")
            MenuItem {
                text: qsTr("Exit")
                onTriggered: Qt.quit();
            }
        }*/
        Menu{
            title: qsTr("File")
            MenuItem {
                text: qsTr("Search")
                onTriggered: {webview.url = "http://sphinx.icenowy.tk/dosui.php?search=" + input.text;}
            }
            MenuItem {
                text: qsTr("Exit")
                onTriggered: Qt.quit();
            }
        }
    }
    ColumnLayout{
        anchors.fill: parent

    RowLayout{
        Layout.fillWidth: true
        TextField{
            id: input
            placeholderText: qsTr("Please input the searching expression here")
            Layout.preferredHeight: 50
            Layout.fillWidth: true
        }

        Button {
            id: query
            text: qsTr("Brick!")
            Layout.preferredHeight: 50
            onClicked: {//webview.url = "http://sphinx.icenowy.tk/dosui.php?search=" + input.text;}
                DataLibrary.getData("Terminator",table.model);
            }
        }
    }
    /*WebView{
        id: webview
        Layout.fillHeight: true
        Layout.fillWidth: true
    }*/
    ListView{
        id: table
        model: ListModel {
            ListElement { title: "Tropical" }
        }
        Layout.fillHeight: true
        Layout.fillWidth: true

        delegate: Text {
                text: title
                font.pointSize: 14
                elide: Text.ElideRight
                wrapMode: Text.WrapAnywhere
            }
    }
    /*Text{
        id:text
        font.pointSize: 36;
        Layout.fillHeight: true
        Layout.fillWidth: true
        wrapMode: Text.WrapAnywhere
    }*/
    }
}
