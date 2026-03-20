from flask import jsonify
from flask_restful import Resource, reqparse
from app.models.mission import Mission
from datetime import datetime

#para adicionar
argumentos = reqparse.RequestParser()#definir os argumentos da solicitação HTTP
argumentos.add_argument('name', type=str)
argumentos.add_argument('release_date', type=str)
argumentos.add_argument('endpoint', type=str)
argumentos.add_argument('mission_state', type=str)
argumentos.add_argument('crew', type=str)
argumentos.add_argument('payload', type=str)
argumentos.add_argument('duration', type=str)
argumentos.add_argument('cost', type=str)
argumentos.add_argument('status', type=str)


#para atualizar
argumentos_update = reqparse.RequestParser() #definir os argumentos da solicitação HTTP
argumentos_update.add_argument('id', type=int)
argumentos_update.add_argument('name', type=str)
argumentos_update.add_argument('release_date', type=str)
argumentos_update.add_argument('endpoint', type=str)
argumentos_update.add_argument('mission_state', type=str)
argumentos_update.add_argument('crew', type=str)
argumentos_update.add_argument('payload', type=str)
argumentos_update.add_argument('duration', type=str)
argumentos_update.add_argument('cost', type=str)
argumentos_update.add_argument('status', type=str)

#para deletar
argumentos_delete = reqparse.RequestParser()
argumentos_delete.add_argument('id', type=int)

args = reqparse.RequestParser()
args.add_argument('id', type=int, required=True, help="ID não pode ser vazio!")


class Index(Resource):
    def get(self):
        return jsonify("Welcome Aplication Flask")

class MissionById(Resource):
    def get(self):
        try:
            datas = args.parse_args()
            print(datas)
            missions = Mission.list_id(self, datas['id'])
            if missions:
                return jsonify(missions)
            else:
                return jsonify({'status': 404, 'msg': 'Nenhuma missão encontrada para o ID fornecido'}), 404
        except Exception as error:
            return jsonify({'status': 500, 'msg': f'{error}'}), 500

class MissionCreate(Resource):
    def post(self):
        try:
            datas = argumentos.parse_args()
            release_date = datetime.strptime(datas['release_date'], '%Y-%m-%d %H:%M:%S')
            duration = datetime.strptime(datas['duration'], '%Y-%m-%d %H:%M:%S')
            cost = float(datas['cost'])
            Mission.create_mission(self, datas['name'], release_date, datas['endpoint'], datas['mission_state'], datas['crew'], datas['payload'], duration, cost, datas['status'])
            return {"message": 'Mission create successfully!'}, 200
        except Exception as error:
            return jsonify({'status': 500, 'msg': f'{error}'}), 500

class MissionUpdate(Resource):
    def put(self):
        try:
            datas = argumentos_update.parse_args()
            release_date = datetime.strptime(datas['release_date'], '%Y-%m-%d %H:%M:%S')
            duration = datetime.strptime(datas['duration'], '%Y-%m-%d %H:%M:%S')
            cost = float(datas['cost'])
            Mission.update_mission(self, datas['id'], 
            datas['name'], 
            release_date, 
            datas['endpoint'], 
            datas['mission_state'], 
            datas['crew'], 
            datas['payload'], 
            duration, 
            cost, 
            datas['status']
            )
            return {"message": 'Mission update successfully!'}, 200    
        except Exception as error:
            return jsonify({'status': 500, 'msg': f'{error}'}), 500

class MissionDelete(Resource):
    def delete(self):
        try:
            datas = argumentos_delete.parse_args()
            Mission.delete_mission(self, datas['id'])
            return {"message": 'Mission delete successfully!'}, 200    
        except Exception as e:
            return jsonify({'status': 500, 'msg': f'{e}'}), 500

