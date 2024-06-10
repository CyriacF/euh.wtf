# Agar.io clone - Euh.wtf
Pour la SAE du 4ème semestre nous avons dû produire un Agar.io like en NodeJS, en utilisant Socket.io pour la communication entre notre serveur et notre client.

[![Screen du projet](https://euh.wtf/msedge_lSYwpWcQyt.png)](https://sae.euh.wtf)

## Auteurs

- [Gautier](https://gitlab.univ-lille.fr/)
- [Cyriac](https://gitlab.univ-lille.fr/)

## Lancement du projet

Pour lancer le projet pour la première fois :

```bash
npm run build:server
npm run start
```

## Diagramme de séquence pour l'ajout d'un joueur
[![](https://mermaid.ink/img/pako:eNpl0L0OwiAQB_BXaW7S2L4AQwd1M34kXVku5VRigXoFk6bpu0tLXSwL5O7HEf4D1E4RCOjoHcjWdNT4YDTSZnG1yF7XukXrs0Ojyfp1vSL-UOB1Y--QlbSpkW4XZblbvMhQqVuDPfGmnbcLGtomvZiJz1PW-A9GWaQnRHY9QQ6G2KBW8WPDJCX4JxmSIOJRIb8kSDtGh8G7qrc1CM-BcgitQv8LAcQdmy5WSWnv-JySmgMbv962amI?type=png)](https://mermaid.live/edit#pako:eNpl0L0OwiAQB_BXaW7S2L4AQwd1M34kXVku5VRigXoFk6bpu0tLXSwL5O7HEf4D1E4RCOjoHcjWdNT4YDTSZnG1yF7XukXrs0Ojyfp1vSL-UOB1Y--QlbSpkW4XZblbvMhQqVuDPfGmnbcLGtomvZiJz1PW-A9GWaQnRHY9QQ6G2KBW8WPDJCX4JxmSIOJRIb8kSDtGh8G7qrc1CM-BcgitQv8LAcQdmy5WSWnv-JySmgMbv962amI)

## Diagramme de séquence pour la récupération de la liste des joueurs
[![](https://mermaid.ink/img/pako:eNplkDEOwjAMRa9SeQJBL5ChA2VlYs1iEkOjtklxHSSEuDtpUxBSM0X_vdjKf4EJlkDBSPdI3tDR4Y2x175IZ0AWZ9yAXoq6c-RlnZ-JHxR5DQ4B2WqfQX5dVtVu8VVxI5mVzTYrC5icOVeFaci0deg6N7rgv94My6SVv1GXvOp_ysTz0gXDHnriHp1Nv31NsgZpqCcNKl0tcqtB-3fyMEo4P70BJRxpD3GwKN9mQF2xG1NK1kngU65vbvH9ARFscF4?type=png)](https://mermaid.live/edit#pako:eNplkDEOwjAMRa9SeQJBL5ChA2VlYs1iEkOjtklxHSSEuDtpUxBSM0X_vdjKf4EJlkDBSPdI3tDR4Y2x175IZ0AWZ9yAXoq6c-RlnZ-JHxR5DQ4B2WqfQX5dVtVu8VVxI5mVzTYrC5icOVeFaci0deg6N7rgv94My6SVv1GXvOp_ysTz0gXDHnriHp1Nv31NsgZpqCcNKl0tcqtB-3fyMEo4P70BJRxpD3GwKN9mQF2xG1NK1kngU65vbvH9ARFscF4)

## Diagramme de séquence pour la récupération du scoreboard

[![](https://mermaid.ink/img/pako:eNptkDEOwjAMRa9SeQJBL5ChA7AysWYxiSkRNCmug4QQdydpCkIqWRL7v28r_wkmWAIFA90ieUM7hy1jp32VTo8szrgevVTbqyMv8_6B-E6R_wgmMGlfhOKum2Y18apqSUZkE5DtYlm4SR3BLKpqyNcxMxOR6zoB9XfSDJmGZKgs_mVgDR1xh86mbz-zQ4OcqSMNKj0t8kWD9q_EYZRweHgDSjjSGmJvUT4RgTrhdUhdsk4C70uOY5yvNw9UdPc?type=png)](https://mermaid.live/edit#pako:eNptkDEOwjAMRa9SeQJBL5ChA7AysWYxiSkRNCmug4QQdydpCkIqWRL7v28r_wkmWAIFA90ieUM7hy1jp32VTo8szrgevVTbqyMv8_6B-E6R_wgmMGlfhOKum2Y18apqSUZkE5DtYlm4SR3BLKpqyNcxMxOR6zoB9XfSDJmGZKgs_mVgDR1xh86mbz-zQ4OcqSMNKj0t8kWD9q_EYZRweHgDSjjSGmJvUT4RgTrhdUhdsk4C70uOY5yvNw9UdPc)

## Diagramme de séquence pour la mise à jour de la position d'un joueur

[![](https://mermaid.ink/img/pako:eNplkcFOwzAMhl_F8omJduIcqT0AxyEh7Ug4WIkH0dqkuC5aNe3dyZqKS3Nyfn_-7ThXdMkzGhz5Z-Lo-DXQl1BvI-QzkGhwYaCo8NIFjrrVjyy_PMk28ZxIvI0lUarrtn1ceQPT4En5vaOZ5eFSwbwr6Arc2cXCwLAwhzDq_hQ6zXhRoGnX3D54aJoGxuTOrPm2-3j6LHaLR53d6v_OpWbTrcgGXEriL9BAHmqJ5xzPWGHP0lPweVvXe7FF_eaeLZocepKzRRtvmaNJ03GODo3KxBWWl66bRXOibswq-6BJ3sr6l1-4_QHckIab?type=png)](https://mermaid.live/edit#pako:eNplkcFOwzAMhl_F8omJduIcqT0AxyEh7Ug4WIkH0dqkuC5aNe3dyZqKS3Nyfn_-7ThXdMkzGhz5Z-Lo-DXQl1BvI-QzkGhwYaCo8NIFjrrVjyy_PMk28ZxIvI0lUarrtn1ceQPT4En5vaOZ5eFSwbwr6Arc2cXCwLAwhzDq_hQ6zXhRoGnX3D54aJoGxuTOrPm2-3j6LHaLR53d6v_OpWbTrcgGXEriL9BAHmqJ5xzPWGHP0lPweVvXe7FF_eaeLZocepKzRRtvmaNJ03GODo3KxBWWl66bRXOibswq-6BJ3sr6l1-4_QHckIab)

## Diagramme de séquence pour la déconnexion d'un joueur
[![](https://mermaid.ink/img/pako:eNp1kUFrwzAMhf-K0allTdnZkMC2XgYbDHKcdxC2upkmdqYohVL63-fa6S7ZfLLfe_okrDPY6Ag0jPQ9UbC08_jJ2Jug0hmQxVs_YBD11HkKstRb4iNNvDQeI7L7I28jkwnFKNCqae5mjFbOjzaGQFZW6xKarWsqM7UaOjwRv_hRtnvfCfGqKKpuZm_rnarrWo3RHkjSa_1-_1FwmVElWvXbs9QsuuVRtULn3nLgOWQlAx6CayPL3PjfSZn6eKRSfsvCBnriHr1L_36-VhqQL-rJgE5Xh3wwYMIl5XCS2J6CBS080QamwaHcdgR6j92YVHJeIr-WReZ9Xn4A7rqhpQ?type=png)](https://mermaid.live/edit#pako:eNp1kUFrwzAMhf-K0allTdnZkMC2XgYbDHKcdxC2upkmdqYohVL63-fa6S7ZfLLfe_okrDPY6Ag0jPQ9UbC08_jJ2Jug0hmQxVs_YBD11HkKstRb4iNNvDQeI7L7I28jkwnFKNCqae5mjFbOjzaGQFZW6xKarWsqM7UaOjwRv_hRtnvfCfGqKKpuZm_rnarrWo3RHkjSa_1-_1FwmVElWvXbs9QsuuVRtULn3nLgOWQlAx6CayPL3PjfSZn6eKRSfsvCBnriHr1L_36-VhqQL-rJgE5Xh3wwYMIl5XCS2J6CBS080QamwaHcdgR6j92YVHJeIr-WReZ9Xn4A7rqhpQ)


## Difficultés techniques
Nous avons rencontré plusieurs difficultés techniques lors du développement de notre projet, notamment :

* __La gestion du canvas__ : Il a été difficile de gérer correctement le canvas, la gestion des coordonnées et du "scale" était une horreur dans ce projet, j'en suis encore traumatisé, j'en tremble en l'écrivant.
* __La synchronisation avec Socket.io__ : Socket.io est une trés bonne technologie mais parfois compliquée à comprendre au début, le fait d'envoyer des informations et de les recevoir à distance est une nouvelle notion pour nous et ce fut très enrichissant.
* __Ensemble du projet__ : La vue d'ensemble du projet sur le coté Backend pour que ce soit conforme dans son utilisation avec socket.io , pour surmonter cela, nous avons plusieurs fois eu des discussions sur l'infrastructure du projet qui a mené a du refractoring de nos classes ou du côté socket.io selon la difficulté pour adapter notre code aux différentes parties

## Points d'amélioration/achèvement
Notre projet pourrait être amélioré de plusieurs façons :

* __Le dézoom en fonction de la taille__ : C'est un bon ajout qui n'a pas pu être fait, il est compliqué de bien gérer le canvas et les joueurs en fonction de leurs coordonnées
* __Ajouter des fonctionnalités__ : Pour améliorer notre jeu on pourrait ajouter des pièges, des obstacles ou même des bonus à récupérer !
* __Expérience utilisateur__ : Améliorer l'expérience utilisateur avec des choix de couleurs, des skins, des sons etc... (ou même des pubs comme dans le vrai Agar.io :D)


## De quoi nous sommes fières ?

Nous sommes fières d'avoir une liaison en direct entre tous les joueurs, c'est l'un des premiers projets avec un système de multijoueur, ensuite il y a aussi le fait que le canvas fonctionne dans sa globalité, même si le rescale manque à l'appel