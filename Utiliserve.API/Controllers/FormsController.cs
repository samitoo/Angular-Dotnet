using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Utiliserve.API.Data;
using Utiliserve.API.Dtos;

namespace Utiliserve.API.Controllers
{

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class FormsController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;

        public FormsController(IDatingRepository repo, IMapper mapper){   
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetForms(){
            var forms = await _repo.GetForms();
            var formstoReturn = _mapper.Map<IEnumerable<FormsForListDto>>(forms);

            return Ok(formstoReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetForm(int id){
            var form = await _repo.GetForm(id);
            var formToReturn = _mapper.Map<FormForDetailedDto>(form);
            return Ok(formToReturn);
        }
    }

}