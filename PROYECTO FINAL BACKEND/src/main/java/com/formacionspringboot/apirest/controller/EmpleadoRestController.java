package com.formacionspringboot.apirest.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.dao.DataAccessException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


import org.springframework.web.bind.annotation.RestController;

import com.formacionspringboot.apirest.entity.Departamento;
import com.formacionspringboot.apirest.entity.Empleado;
import com.formacionspringboot.apirest.entity.Proyecto;
import com.formacionspringboot.apirest.service.EmpleadoService;




@RestController
@RequestMapping("/api")
public class EmpleadoRestController {
	
	@Autowired
	private EmpleadoService servicio;
	
	@GetMapping({"/empleado"})
	public List<Empleado> index(){
		return servicio.findAll();
	}
	
	
	@GetMapping("/empleado/{id}")
	public ResponseEntity<?>  findById(@PathVariable Long id) {
		Empleado Empleado = null;
		Map<String, Object> response = new HashMap<>();
		
		try {
			
			Empleado = servicio.findById(id);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar consulta a base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		
		if(Empleado == null) {
			response.put("mensaje", "El Empleado ID: " +id.toString()+" no existe en la base de datos");
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<Empleado>(Empleado,HttpStatus.OK);
		
	}
	

	
	@PostMapping("/empleado")
	public ResponseEntity<?> saveEmpleado(@RequestBody Empleado Empleado) {
		 Empleado EmpleadoNew= null;
		 Map<String, Object> response = new HashMap<>();
		 
		 try {
			
			 EmpleadoNew = servicio.save(Empleado);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar un insert a base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		 
		 response.put("mensaje", "El Empleado ha sido creado con éxito!");
		 response.put("Empleado",EmpleadoNew);
		 
		 return new ResponseEntity<Map<String,Object>>(response,HttpStatus.CREATED);
		 
		 
	}
	

	@PutMapping("/empleado/{id}")
	public ResponseEntity<?> updateEmpleado(@RequestBody Empleado Empleado, @PathVariable Long id) {
		Empleado EmpleadoActual = servicio.findById(id);
		
		Map<String, Object> response = new HashMap<>();
		
		if(EmpleadoActual == null) {
			response.put("mensaje","Error: no se pudo editar, el Empleado con ID: "+id.toString()+" no existe en la base de datos");
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.NOT_FOUND);
		}
		
		try {
			//EmpleadoActual.setNombre(Empleado.getNombre());
			
			EmpleadoActual.setApellido(Empleado.getApellido());
			EmpleadoActual.setDireccion(Empleado.getDireccion());
			EmpleadoActual.setEmail(Empleado.getDireccion());
			EmpleadoActual.setFecha(Empleado.getFecha());
			EmpleadoActual.setGenero(Empleado.getGenero());
			EmpleadoActual.setNombre(Empleado.getNombre());
			EmpleadoActual.setSueldo(Empleado.getSueldo());
			EmpleadoActual.setTelefono(Empleado.getTelefono());
			EmpleadoActual.setDepartamento(Empleado.getDepartamento());
			EmpleadoActual.setProyecto(Empleado.getProyecto());
				
			servicio.save(EmpleadoActual);
			
		}catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar un update a base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		
		 response.put("mensaje", "El Empleado ha sido actualizado con éxito!");
		 response.put("Empleado",EmpleadoActual);
		 
		 return new ResponseEntity<Map<String,Object>>(response,HttpStatus.CREATED);
	}
	
	
	
	@DeleteMapping("/empleado/{id}")
	public ResponseEntity<?> deleteEmpleado(@PathVariable Long id) {
		
		Empleado EmpleadoActual = servicio.findById(id);
		
		Map<String, Object> response = new HashMap<>();
		
		if(EmpleadoActual == null) {
			response.put("mensaje","Error: no se pudo eliminar, el Empleado con ID: "+id.toString()+" no existe en la base de datos");
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.NOT_FOUND);
		}
		
		try {
			
			servicio.delete(id);
		
	
		}catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar un delete a base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		
		
		 response.put("mensaje", "El Empleado ha sido eliminado con éxito!");
		 response.put("Empleado",EmpleadoActual);
		 
		 return new ResponseEntity<Map<String,Object>>(response,HttpStatus.OK);
		
	}
	
	@GetMapping("/empleado/departamentos")
	public List<Departamento> listarDepartamentos(){
		return servicio.findAllDepartamentos();
	}
	
	
	@GetMapping("/empleado/proyectos")
	public List<Proyecto> listarProyectos(){
		return servicio.findAllProyectos();
	}
	
	
	

}
