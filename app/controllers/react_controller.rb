class ReactController < ApplicationController
	
	def root
		@headers = ["Nombre", "Apellido", "Telefono", "Cedula"]
	end
	
	
end